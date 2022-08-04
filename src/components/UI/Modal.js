import './Modal.css';
import ModuleForm from './ModuleForm';

export default function Modal({ title, children, onConfirm, onCancel}) {
  return (
        <div>
            <main className="ModalPanel">
                <ModuleForm onClick={onConfirm} onCancel={onCancel}/>
            </main>
        </div>
  );
}
