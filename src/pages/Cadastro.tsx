import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FatCircleIcon from '../icons/FatCircleIcon';
import CircleIcon from '../icons/CircleIcon';
import RedHeartIcon from '../icons/RedHeartIcon';
import CircleGreenHeartIcon from '../icons/CircleGreenHeart';
import ArrowIcon from '../icons/ArrowIcon';
import '../styles/Cadastro.css';
import CoraGroupImage from '../assets/CoraGroup.png';
import Clara from '../assets/Clara.png';
import Vitor from '../assets/Vitor.png';
import Rafa from '../assets/Rafa.png';
import Cora from '../assets/Cora.png';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formCompleted, setFormCompleted] = useState(false);
  
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: ''
  });
  
  const [childData, setChildData] = useState({
    fullName: '',
    birthDate: ''
  });
  
  const [children, setChildren] = useState<Array<{fullName: string, birthDate: string}>>([]);

  const removeChild = (index: number) => {
    const updatedChildren = [...children];
    updatedChildren.splice(index, 1);
    setChildren(updatedChildren);
  };

  const validatePhone = (phone: string): string => {
    const numbersOnly = phone.replace(/\D/g, '');

    if (numbersOnly.length < 10 || numbersOnly.length > 11) {
      return 'Telefone inválido. Digite DDD + número (mínimo 10 dígitos)';
    }

    return '';
  };

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Email inválido';
    }
    return '';
  };

  const validatePassword = (password: string): string => {
    if (password.length < 6) {
      return 'A senha deve ter pelo menos 6 caracteres';
    }
    return '';
  };

  const validateConfirmPassword = (password: string, confirmPassword: string): string => {
    if (password !== confirmPassword) {
      return 'As senhas não coincidem';
    }
    return '';
  };

  const validateDate = (date: string): string => {
    const selectedDate = new Date(date);
    if (isNaN(selectedDate.getTime())) {
      return 'Data inválida';
    }
    return '';
  };

  const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedUserData = {
      ...userData,
      [name]: value
    };
    
    setUserData(updatedUserData);

    let errorMessage = '';
    switch (name) {
      case 'phone':
        errorMessage = validatePhone(value);
        break;
      case 'email':
        errorMessage = validateEmail(value);
        break;
      case 'password':
        errorMessage = validatePassword(value);
        break;
      case 'confirmPassword':
        errorMessage = validateConfirmPassword(updatedUserData.password, value);
        break;
      case 'birthDate':
        errorMessage = validateDate(value);
        break;
    }
    
    const newErrors = {
      ...errors,
      [name]: errorMessage
    };
    setErrors(newErrors);
    
    const allFieldsFilled = Boolean(
      updatedUserData.fullName && 
      updatedUserData.phone && 
      updatedUserData.email && 
      updatedUserData.birthDate && 
      updatedUserData.password && 
      updatedUserData.confirmPassword
    );

    const hasNoErrors = Object.values(newErrors).every(error => !error);
    
    setFormCompleted(allFieldsFilled && hasNoErrors);
  };
  
  const handleChildDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChildData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (name === 'birthDate') {
      const errorMessage = validateDate(value);
      setErrors(prev => ({
        ...prev,
        childDateError: errorMessage
      }));
    }
  };
  
  const addChild = () => {
    const newErrors: Record<string, string> = {};

    if (!childData.fullName) {
      newErrors.childNameError = 'Nome completo é obrigatório';
    }

    if (!childData.birthDate) {
      newErrors.childDateError = 'Data de nascimento é obrigatória';
    } else {
      const dateError = validateDate(childData.birthDate);
      if (dateError) {
        newErrors.childDateError = dateError;
      }
    }

    setErrors(prev => ({...prev, ...newErrors}));

    if (Object.keys(newErrors).length === 0) {
      setChildren([...children, {...childData}]);
      setChildData({fullName: '', birthDate: ''});
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors.childNameError;
        delete newErrors.childDateError;
        return newErrors;
      });
      alert('Criança adicionada com sucesso!');
    }
  };

  const finalizarCadastro = () => {
    if (children.length > 0 || (childData.fullName || childData.birthDate)) {
      let allChildren = [...children];
      if (childData.fullName || childData.birthDate) {
        const newErrors: Record<string, string> = {};
        
        if (!childData.fullName) {
          newErrors.childNameError = 'Nome completo é obrigatório';
        }

        if (!childData.birthDate) {
          newErrors.childDateError = 'Data de nascimento é obrigatória';
        } else {
          const dateError = validateDate(childData.birthDate);
          if (dateError) {
            newErrors.childDateError = dateError;
          }
        }
        
        setErrors(prev => ({...prev, ...newErrors}));

        if (Object.keys(newErrors).length > 0) {
          return;
        }

        if (childData.fullName && childData.birthDate) {
          allChildren = [...children, {...childData}];
          setChildren(allChildren);
        }
      }

      const requestBody = {
        name: userData.fullName,
        email: userData.email,
        password: userData.password,
        user_type: "USER",
        profile_picture: "",
        children: allChildren.map(child => ({
          name: child.fullName,
          birth_date: child.birthDate
        }))
      };
      
      console.log('Dados que seriam enviados para o backend:', requestBody);
      navigate('/login');
    } else {
      alert('Por favor, adicione pelo menos uma criança');
    }
  };

  const handleVoltar = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="cadastro-container">
      <div className="top-bar">
        <button className="voltar-button" onClick={handleVoltar}>
          <ArrowIcon className="voltar-icon" color="#FFFFFF" circleColor="transparent" /> Voltar
        </button>
      </div>

      <div className="background-elements">
        <FatCircleIcon className="bg-circle top-left" color="#7ABBD7" width={400} height={400} />
        <CircleIcon className="bg-circle top-right" color="#FDC647" width={300} height={300} />
        <RedHeartIcon className="bg-heart bottom-left" color="#DF3841" width={350} height={350} />
        <CircleGreenHeartIcon className="bg-circle bottom-right" color="#61BC55" width={350} height={350} />
      </div>

      {step === 1 ? (
        <div className="cadastro-content">
          <div className="illustration-section">
            <img src={CoraGroupImage} alt="Grupo Cora" className="cora-group-image" />
          </div>

          <div className="form-section">
            <h1 className="cadastro-title">Faça seu cadastro!</h1>
            
            <form onSubmit={(e) => {
              e.preventDefault();

              const newErrors: Record<string, string> = {};
              
              if (!userData.fullName) {
                newErrors.fullName = 'Nome completo é obrigatório';
              }
              
              if (!userData.phone) {
                newErrors.phone = 'Telefone é obrigatório';
              } else {
                const phoneError = validatePhone(userData.phone);
                if (phoneError) newErrors.phone = phoneError;
              }
              
              if (!userData.email) {
                newErrors.email = 'Email é obrigatório';
              } else {
                const emailError = validateEmail(userData.email);
                if (emailError) newErrors.email = emailError;
              }
              
              if (!userData.birthDate) {
                newErrors.birthDate = 'Data de nascimento é obrigatória';
              } else {
                const dateError = validateDate(userData.birthDate);
                if (dateError) newErrors.birthDate = dateError;
              }
              
              if (!userData.password) {
                newErrors.password = 'Senha é obrigatória';
              } else {
                const passwordError = validatePassword(userData.password);
                if (passwordError) newErrors.password = passwordError;
              }
              
              if (!userData.confirmPassword) {
                newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
              } else {
                const confirmError = validateConfirmPassword(userData.password, userData.confirmPassword);
                if (confirmError) newErrors.confirmPassword = confirmError;
              }
              
              setErrors(newErrors);

              if (Object.keys(newErrors).length === 0) {
                setStep(2);
              }
            }}>
              <div className="form-group">
                <label htmlFor="fullName">Nome Completo*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleUserDataChange}
                  placeholder="Nome Completo"
                  required
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={handleUserDataChange}
                  placeholder="DDD + número (Ex: 99 99999-9999)"
                  required
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleUserDataChange}
                  placeholder="exemplo@email.com"
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Data de Nascimento*</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={userData.birthDate}
                  onChange={handleUserDataChange}
                  required
                />
                {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha*</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleUserDataChange}
                  placeholder="Mínimo 6 caracteres"
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha*</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleUserDataChange}
                  placeholder="Confirme sua senha"
                  required
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <button 
                type="submit" 
                className={`confirmar-button ${formCompleted ? 'completed' : ''}`}
              >
                Próximo
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="cadastro-content child-info">
          <div className="child-background">
            <img src={Vitor} alt="Vitor" className="child-avatar vitor" />
            <img src={Clara} alt="Clara" className="child-avatar clara" />
            <img src={Rafa} alt="Rafa" className="child-avatar rafa" />
            <img src={Cora} alt="Cora" className="child-avatar cora" />
          </div>
          
          <div className="child-form-container">
            <h1 className="child-title">Informações da criança!</h1>
            
            <form>
              <div className="form-group">
                <label htmlFor="childFullName">Nome Completo*</label>
                <input
                  type="text"
                  id="childFullName"
                  name="fullName"
                  value={childData.fullName}
                  onChange={handleChildDataChange}
                  placeholder="Nome Completo"
                  required
                />
                {errors.childNameError && <span className="error-message">{errors.childNameError}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="childBirthDate">Data de Nascimento*</label>
                <input
                  type="date"
                  id="childBirthDate"
                  name="birthDate"
                  value={childData.birthDate}
                  onChange={handleChildDataChange}
                  required
                />
                {errors.childDateError && <span className="error-message">{errors.childDateError}</span>}
              </div>
              
              {children.length > 0 && (
                <div className="registered-children">
                  <h3>Crianças cadastradas: {children.length}</h3>
                  <ul className="children-list">
                    {children.map((child, index) => (
                      <li key={index} className="child-item">
                        <span className="child-info">
                          {child.fullName} - {child.birthDate && new Date(child.birthDate).toLocaleDateString()}
                        </span>
                        <button 
                          type="button"
                          className="remove-child-button"
                          onClick={() => removeChild(index)}
                          aria-label="Remover criança"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="button-group">
                <button type="button" className="add-child-button" onClick={addChild}>
                  Adicionar nova criança
                </button>
                <button type="button" className="finalizar-button" onClick={finalizarCadastro}>
                  Finalizar cadastro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cadastro;
