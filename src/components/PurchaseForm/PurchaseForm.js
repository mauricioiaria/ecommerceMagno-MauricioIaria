import React, { useState } from "react";
import "./PurchaseForm.css";

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

import Spinner from '../Spinner/Spinner'
import IdNotification from '../IdNotification/IdNotification'


const initialState = {
    name: "",
    lastName: "",
    email: "",
    adress: "",
};

const PurchaseForm = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeHandler = (e) => {
        // setIsLoading(true);
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmitHandler = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
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
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card shadow-lg p-3 mb-5 bg-secondary bg-gradient">
                        <form class="row gap-2" onSubmit={onSubmitHandler}>
                            <div class="col-md-12">
                                <label for="inputName" class="form-label text-black">
                                    APELLIDO
                                </label>
                                <input
                                    class="form-control"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="inputName" class="form-label text-black">
                                    NOMBRE
                                </label>
                                <input
                                    class="form-control"
                                    name="name"
                                    value={values.name}
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="inputEmail4" class="form-label text-black">
                                    EMAIL
                                </label>
                                <input
                                    class="form-control"
                                    placeholder="xxx@xxx.com"
                                    name="email"
                                    value={values.email}
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="inputAddress" class="form-label text-black">
                                    DIRECCION
                                </label>
                                <input
                                    class="form-control"
                                    placeholder=""
                                    name="adress"
                                    value={values.adress}
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div class="col-12">
                                <button class="btn-lg btn-success mt-5">Enviar</button>
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
};

export default PurchaseForm
