import './Modal.css';
import ModuleForm from './ModuleForm';

export default function Modal({ title, children, onClick, onCancel}) {
  return (
        <div>
            <main className="ModalPanel">
                <ModuleForm onClick={onClick} onCancel={onCancel}/>
            </main>
        </div>
  );
}

