import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { deleteDocumentAction, updateDocumentAction } from "./store";
import { useLocation } from "react-router-dom";
import AddEditDocument from "./add-edit";
const DocumentDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location=useLocation();
    let document= location.state.document;
    
    const handleCloseEditDocument = () => {
        if (window.confirm('Are you sure you want to delete this document?')){dispatch(deleteDocumentAction(document.id));}
        navigate('/documents');
    };

    const handleUpdateDocument = (document) => {
        dispatch(updateDocumentAction(document));
        navigate('/documents');
        };
        
    
    return (
    <AddEditDocument
           document={document}
           onSave={handleUpdateDocument}
           onClose={handleCloseEditDocument}
         />
    );
    };
export default DocumentDetails;

    