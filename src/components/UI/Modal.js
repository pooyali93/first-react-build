import './Modal.css';
import ModuleForm from './ModuleForm';

export default function Modal({ title, children, onClick, onAdd, onCancel}) {
  return (
        <div>
          
            <main className="ModalPanel">
            <header>Modal Header</header>
                <ModuleForm onClick={onClick} onAdd={onAdd} onCancel={onCancel}/>
            </main>
        </div>
  );
}

