import React, { useState } from 'react';
import './PurchaseForm.css';

// FireStore
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

// Components
import Spinner from '../Spinner/Spinner';
import IdNotification from '../IdNotification/IdNotification';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    adress: '',
};

function PurchaseForm() {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeHandler = (e) => {
        // setIsLoading(true);
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmitHandler = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'purchases'), {
            values,
        });
        setPurchaseID(docRef);
        setTimeout(() => {
            setIsLoading(false);
            setValues(initialState);
        }, 2500);
    };

    return (
      <div className="contenedorForm">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg p-3 mb-5 bg-secondary bg-gradient">
              <form className="row gap-2" onSubmit={onSubmitHandler}>
                <div className="col-md-12">
                  <label htmlFor="inputName" className="form-label text-black">
                    APELLIDO
                  </label>
                  <input
                    className="form-control"
                    name="lastName"
                    value={values.lastName}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputName" className="form-label text-black">
                    NOMBRE
                  </label>
                  <input
                    className="form-control"
                    name="name"
                    value={values.name}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label text-black">
                    EMAIL
                  </label>
                  <input
                    className="form-control"
                    placeholder="xxx@xxx.com"
                    name="email"
                    value={values.email}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputAddress" className="form-label text-black">
                    DIRECCION
                  </label>
                  <input
                    className="form-control"
                    placeholder=""
                    name="adress"
                    value={values.adress}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="col-12">
                  <button className="btn-lg btn-success mt-5">Enviar</button>
                </div>
              </form>

              {isLoading ? (
                <Spinner />
                        ) : (
                            purchaseID.id && (
                            <div>
                              <IdNotification msg={purchaseID} />
                            </div>
                            )
                        )}

            </div>
          </div>
        </div>
      </div>
    );
}

export default PurchaseForm;
