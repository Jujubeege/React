import { useState, useEffect } from 'react';
import TagInput from '../TagInput/TagInput';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import PostEditorModal from './Modal';
import './PostEditor.css';
import "./Modal.css";


function initalFormData(){
  const savedFormData = localStorage.getItem("formData");
  return savedFormData
  ? JSON.parse(savedFormData)
  : {
    title: "",
    content: "",
    tags: [],
    category: "general",
    isPublished: false,
    isReview: false,
    date: "",
  };
}

function PostEditor() {
  const [formData, setFormData] = useState(initalFormData());
useEffect(()=> {
  localStorage.setItem('formData', JSON.stringify(formData));
}, [formData]);


  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState({});
  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        return value.trim().length < 5
          ? 'Title must be at least 5 characters'
          : '';
      case 'content':
        return value.trim().length < 5
          ? 'Content must be at least 5 characters'
          : '';
      case 'tags':
        return value.length === 0
          ? 'At least one tag is required'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    console.log(e)
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    setIsDirty(prev => ({
      ...prev,
      [name]: true
    }));
    if (isDirty[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, newValue)
      }));
    }
  };

  const [file, setFile] = useState(null);
  function handleImage(e){
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle submission
      console.log('Form submitted:', formData);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [results, setResults] =useState(null);
  const handleButtonClick = () =>
    { setShowModal(true);
      const results = PostEditorModal(formData);
      console.log(results);
      setResults(results);
    };
   const handleCloseModal = () =>
    { setShowModal(false);
    };


  return (
    <form onSubmit={handleSubmit} className="post-editor">
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <RichTextEditor 
      value = {formData.content}
      onChange = {(str) => handleChange({target: {name: "content", value: str}})}
      onBlur = {handleBlur}
      />
      

    {/* <div className="form-group">
        <label htmlFor="content">Content *</label>
          <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="10"
          className={errors.content ? 'error' : ''}
        />
        {errors.content && <span className="error-message">{errors.content}</span>}
      </div> */}
      <div className="change-image">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleImage} />
            <img src={file} />
        </div>
      <TagInput
        tags={formData.tags}
        onChange={tags => handleChange({
          target: { name: 'tags', value: tags }
        })}
        onBlur={() => handleBlur({ target: { name: 'tags', value: formData.tags } })}
        error={errors.tags}
      />
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="general">General</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
        </select>
      </div>
      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />
          Publish immediately
        </label>
      </div>
      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="isReview"
            checked={formData.isReview}
            onChange={handleChange}
          />
          Review and Submit
        </label>
      </div>
      <button type="submit" className="submit-button" onClick={handleButtonClick}>
        {/* {formData.isPublished ? 'Publish Post' : {formData.isReview ? 'Review and Post' : 'Save Draft'}} */}
      Submit Button</button>
     {showModal && ( <div>{results}
     <button type='reset' className='modal-clear' onClick={handleCloseModal} >X</button>
     </div>)}
    </form>
    );
}
export default PostEditor;







