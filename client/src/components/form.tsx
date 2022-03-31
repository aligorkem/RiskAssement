import { useState } from "react";
import { UserForm } from "./user-form";
import { UserBankForm } from "./user-bank-form";
import { IUser } from "../models/user.model";

export function Form() {
    const [showUserBankForm, setShowUserBankForm] = useState<boolean>(false);
    const [userForm, setUserForm] = useState<IUser>();

    const changeForm = (data: IUser) => {
        setUserForm({ ...userForm, ...data });
    }

    const changeShowUserBankForm = () => { setShowUserBankForm(true); }
    return(
        <>
           { showUserBankForm ? <UserBankForm userForm={userForm} /> : <UserForm  changeShowUserBankForm={ changeShowUserBankForm }   changeForm={changeForm}/>} 
        </>
    )
}