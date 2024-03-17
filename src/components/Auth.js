import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Formik, Form, Field } from "formik";

const Auth = () => {
    const { cart, total, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");


    const comprar = (data) => {
        const order = {
            cliente: data,
            products: cart,
            total: total,
        };

        const orderRef = collection(db, "id");

        addDoc(orderRef, order).then((doc) => {
            setOrderId(doc.id);
            clearCart();
        });
    };

    if (orderId) {
        return (
            <div className="OrdenGenerada">
                <h1 className="OrdenGeneradah1"> Muchas gracias por tu compra </h1>
                <p className=""> Numero de pedido es : {orderId} </p>
            </div>
        );
    }
    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = 'El correo electrónico es obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            error = 'Correo electrónico inválido';
        }
        return error;

    }



    return (
        <div className="ContainerCheck">
            <div className="H1 Check">
                <h1 className="CheckoutH1"> Checkout </h1>
            </div>
            <Formik
                initialValues={{ nombre: "", telefono: "", mail: '' }}
                onSubmit={(values) => comprar(values)}

            >
                <Form className="FromCheck">
                    <label className="LabelCheck">
                        Nombre
                        <Field className="InputCheck" type="text" name="nombre" />
                    </label>
                    <label className="LabelCheck">
                        Telefono
                        <Field className="InputCheck" type="text" name="telefono" />
                    </label>
                    <label className="LabelCheck">
                        Email
                        <Field className="InputCheck" type="email" name="mail" validate={validateEmail} />
                    </label>
                    <div className="LabelCheck">
                        <button type="submit" className="ButtonCheck">
                            Generar orden
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};


export default Auth;

// function Auth(){

//     const [email , setEmail ] = useState("");
//     const [password , setPassword ] = useState("");


//     const signIn = async ()=>{
//         await createUserWithEmailAndPassword(auth,email,password);
//     }

//     const logOut = async ()=>{
//         await signOut(auth);
//     }

//     const signInWithGoogle = async ()=>{
//         await signInWithPopup(auth,googleProvider);
//     }

//     return (

//         <div>
//             <span>Usuario: {auth?.currentUser?.email}</span>
//             <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
//             <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
//             <button onClick={signIn}>Ingresar</button>
//             <button onClick={signInWithGoogle}>Ingresar con Google</button>
//             <button onClick={logOut}>Salir</button>
//         </div>
//     )

// }