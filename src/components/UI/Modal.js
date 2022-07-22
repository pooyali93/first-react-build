import './Modal.css';
import ModuleForm from './ModuleForm';

export default function Modal({ title, children, onClick, onConfirm, onCancel}) {
  return (
        <div>
          
            <main className="ModalPanel">
            <header>Modal Header</header>
                <ModuleForm onClick={onClick} onConfirm={onConfirm} onCancel={onCancel}/>
            </main>
        </div>
  );
}

