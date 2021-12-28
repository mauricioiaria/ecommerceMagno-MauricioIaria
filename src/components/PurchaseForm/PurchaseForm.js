import React, { useState } from "react";
import "./PurchaseForm.css";

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

import swal from "sweetalert";



const initialState = {
    name: "",
    lastName: "",
    email: "",
    adress: "",
};

const PurchaseForm = () => {
    const [values, setValues] = useState(initialState);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            values,
        });
        console.log('Document Written with ID:', docRef.id);
    };



    return (
        <div className="contenedorForm">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card shadow-lg p-3 mb-5 bg-secondary bg-gradient">
                            <form class="row gap-2" onSubmit={onSubmitHandler}>
                                <div class="col-md-6">
                                    <label for="inputName" class="form-label text-black">
                                        Apellido
                                    </label>
                                    <input
                                        class="form-control"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputName" class="form-label text-black">
                                        Nombre
                                    </label>
                                    <input
                                        class="form-control"
                                        name="name"
                                        value={values.name}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label text-black">
                                        Email
                                    </label>
                                    <input
                                        class="form-control"
                                        placeholder="xxx@xxx.com"
                                        name="email"
                                        value={values.email}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputAddress" class="form-label text-black">
                                        Direccion
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
                                    <button class="btn-lg btn-primary mt-5">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseForm
