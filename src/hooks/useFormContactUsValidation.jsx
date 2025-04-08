import { useState } from 'react';

const useFormContactUsValidation = () => {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    name: '',
    message: ''
  });

  const validateForm = (form) => {
    setValidated(true);
    
    const formData = new FormData(form);
    let newErrors = {
      email: '',
      name: '',
      message: ''
    };
    let isValid = true;

    // Validasi email
    const email = formData.get('email');
    if (!email) {
      newErrors.email = 'Email harus diisi';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format email tidak valid';
      isValid = false;
    }

    // Validasi nama
    const name = formData.get('name');
    if (!name) {
      newErrors.name = 'Nama harus diisi';
      isValid = false;
    } else if (name.length > 15) {
      newErrors.name = 'Nama maksimal 15 karakter';
      isValid = false;
    }

    // Validasi pesan
    const message = formData.get('message');
    if (!message) {
      newErrors.message = 'Pesan harus diisi';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return {
    errors,
    validated,
    validateForm
  };
};

export default useFormContactUsValidation;