import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { IToast } from "../models/toast.model";

export const ToastFunction = (props: IToast) => {
    const [showToast, setShowToast] = useState(props.show);
    return(
        <ToastContainer className="p-3" position="top-end">
        <Toast className={`toast-${props.variant}`} onClose={() => setShowToast(false)} show={showToast} delay={5000}>
          <Toast.Header>
            <strong className="me-auto">{props.header}</strong>
          </Toast.Header>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    )
}