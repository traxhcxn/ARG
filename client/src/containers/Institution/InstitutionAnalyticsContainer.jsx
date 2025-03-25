import React, { useState, useEffect } from 'react';
import { StaffJoin } from '../../components/Joins';
import { AppButton } from '../../components/Buttons';
import { AdminAnalyticsCard } from '../../components/Cards';

function InstitutionAnalyticsContainer() {
  const [file, setFile] = useState(null);
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle file upload
  const handleFileUpload = async (uploadedFile) => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append('file', uploadedFile);
    formData.append('department', department);
    formData.append('category', category);

    try {
      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          setUploadProgress(Math.round((event.loaded / event.total) * 100));
        }
      };

      const promise = new Promise((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(new Error(xhr.statusText));
          }
        };
        xhr.onerror = () => reject(new Error('Network error'));
      });

      xhr.open('POST', 'http://localhost:5000/arg/analytics/upload');
      xhr.send(formData);

      const result = await promise;
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Handle file input change
  const onFileInput = async (event) => {
    const uploadedFile = event.target.files[0];
    event.target.value = '';

    if (!uploadedFile?.name.match(/\.(csv|xlsx)$/i)) {
      alert("Only .csv or .xlsx files are allowed");
      return;
    }

    if (!department || !category) {
      alert("Please select both department and category");
      return;
    }

    setIsLoading(true);
    setUploadProgress(0);

    try {
      const result = await handleFileUpload(uploadedFile);
      
      // Preview the uploaded file
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile({
          name: uploadedFile.name,
          type: uploadedFile.type,
          size: uploadedFile.size,
          content: e.target.result
        });
      };
      reader.readAsDataURL(uploadedFile);

      alert(result.message || 'File uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setIsLoading(false);
      setUploadProgress(0);
    }
  };

  // Fetch pending analytics
  const fetchPendingAnalytics = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/arg/analytics/pending');
      if (!response.ok) {
        throw new Error(await response.text() || 'Failed to fetch analytics');
      }
      const { data } = await response.json();
      setAnalyticsData(data || []);
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle analytics display
  const toggleAnalyticsDisplay = () => {
    if (!showAnalytics) {
      fetchPendingAnalytics();
    }
    setShowAnalytics(!showAnalytics);
  };

  // Handle item selection
  const toggleItemSelection = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };

  // Approve selected items
  const approveSelectedItems = async () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item to approve");
      return;
    }

    if (!confirm(`Approve ${selectedItems.length} item(s)?`)) return;

    setIsLoading(true);
    try {
      const responses = await Promise.all(
        selectedItems.map(id => 
          fetch(`/arg/analytics/approve/${id}`, { method: 'PUT' })
        )
      );
      
      const errors = responses.filter(r => !r.ok);
      if (errors.length > 0) throw new Error(`${errors.length} items failed to approve`);
      
      alert(`${selectedItems.length} item(s) approved successfully`);
      setSelectedItems([]);
      fetchPendingAnalytics();
    } catch (error) {
      alert(`Approval failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Reject selected items
  const rejectSelectedItems = async () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item to reject");
      return;
    }

    if (!confirm(`Reject ${selectedItems.length} item(s)?`)) return;

    setIsLoading(true);
    try {
      const responses = await Promise.all(
        selectedItems.map(id => 
          fetch(`/arg/analytics/reject/${id}`, { method: 'DELETE' })
        )
      );
      
      const errors = responses.filter(r => !r.ok);
      if (errors.length > 0) throw new Error(`${errors.length} items failed to reject`);
      
      alert(`${selectedItems.length} item(s) rejected successfully`);
      setSelectedItems([]);
      fetchPendingAnalytics();
    } catch (error) {
      alert(`Rejection failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Render file preview
  const renderFilePreview = () => {
    if (!file) return null;

    return (
      <div className='col-span-3'>
        <div className='w-full flex items-center justify-center bg-secondary h-10'>
          <p><strong>Preview</strong> - {file.name}</p>
        </div>
        {file.type.includes("image") && (
          <img src={file.content} alt="Preview" className="w-1/2 border rounded-b-md overflow-hidden" />
        )}
        {file.type.includes("pdf") && (
          <iframe src={file.content} title="PDF Preview" className="w-full h-[690px] border overflow-hidden" />
        )}
        {(file.type.includes("text") || file.type.includes("csv") || file.type.includes("excel")) && (
          <pre className="bg-base-100 p-3 border rounded-b-md overflow-hidden">
            {file.content}
          </pre>
        )}
      </div>
    );
  };

  // Render file info
  const renderFileInfo = () => {
    if (!file) return null;

    return (
      <div className='col-span-2 bg-secondary px-10 py-6 flex flex-col gap-3'>
        <p><strong>File Name:</strong> {file.name}</p>
        <p><strong>File Type:</strong> {file.type}</p>
        <p><strong>File Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Category:</strong> {category}</p>
        
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary h-2.5 rounded-full" 
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
        
        <AppButton
          btnText={isLoading ? "Uploading..." : "Upload File"}
          className="w-40 rounded self-center mt-5"
          onClick={() => setFile(null)}
          disabled={isLoading}
        />
      </div>
    );
  };

  return (
    <div role="tablist" className="tabs tabs-lifted m-3">
      {/* Upload Data Tab */}
      <input type="radio" name="my_tabs_2" role="tab" className="tab min-w-40" aria-label="Upload Data" defaultChecked />
      <div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
        <div className='w-full flex flex-col items-center gap-5 min-h-[575px]'>
          <div>
            <h3 className='text-xl font-semibold'>Upload Data for Analytics</h3>
            <p className='text-justify'>
              Upload CSV or Excel files to generate analytics charts. Please select the appropriate department and category for your data.
            </p>
          </div>
          
          <StaffJoin
            joinBtnText={isLoading ? 'Processing...' : 'Select File'}
            onStaffJoinButtonClick={() => document.getElementById('fileInput').click()}
            onDepartmentChange={(e) => setDepartment(e.target.value)}
            onCategoryChange={(e) => setCategory(e.target.value)}
          />
          
          <div className='grid grid-cols-5 gap-10'>
            {renderFilePreview()}
            {renderFileInfo()}
          </div>
          
          <input
            type='file'
            className='hidden'
            id='fileInput'
            accept=".csv,.xlsx"
            onChange={onFileInput}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Approve Analytics Tab */}
      <input type="radio" name="my_tabs_2" role="tab" className="tab min-w-40" aria-label="Approve Analytics" />
      <div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
        <div className='w-full flex flex-col items-center gap-5 min-h-[575px]'>
          <div>
            <h3 className='text-xl font-semibold'>Approve Analytics for Reports</h3>
            <p className='text-justify'>
              Review and approve or reject submitted analytics data. Select items using the checkboxes.
            </p>
          </div>
          
          <AppButton
            btnText={showAnalytics ? 'Hide Analytics' : 'Show Submitted Analytics'}
            onClick={toggleAnalyticsDisplay}
            disabled={isLoading}
          />
          
          {isLoading && (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          
          {showAnalytics && (
            <>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                {analyticsData.map((item) => (
                  <AdminAnalyticsCard
                    key={item._id}
                    source={`http://localhost:5000/${item.chartImage}`}
                    title={item.filename}
                    department={item.department}
                    category={item.category}
                    date={new Date(item.uploadedAt).toLocaleDateString()}
                    isSelected={selectedItems.includes(item._id)}
                    onToggle={() => toggleItemSelection(item._id)}
                  />
                ))}
              </div>
              
              {analyticsData.length === 0 && !isLoading && (
                <p className="text-center py-4 text-gray-500">No pending analytics to review</p>
              )}
              
              {analyticsData.length > 0 && (
                <div className='w-full flex justify-center gap-5 mt-6'>
                  <AppButton
                    btnText={`Approve (${selectedItems.length})`}
                    className="w-40 rounded"
                    onClick={approveSelectedItems}
                    disabled={isLoading || selectedItems.length === 0}
                  />
                  <AppButton
                    btnText={`Reject (${selectedItems.length})`}
                    className="w-40 rounded"
                    onClick={rejectSelectedItems}
                    disabled={isLoading || selectedItems.length === 0}
                    variant="error"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default InstitutionAnalyticsContainer;