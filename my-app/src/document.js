import { Button, Table } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddEditDocument from "./add-edit";
import { addDocumentAction, deleteDocumentAction} from "./store";

const Documents = () => {
    const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false);
    const [loading, setLoading]=useState(false)

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const documents = useSelector(state => state.documents);
    const isLoading = useSelector(state => state.isLoading);
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          width: '33%',
          render: (title) => <p>{title}</p>,
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.title.localeCompare(b.title),
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          width: '33%',
          render: (description) => <p>{description}</p>,
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.description.localeCompare(b.description),
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          width: '33%',
          render: (_,record) => <div className="flex flex-row gap-[5px]">
          <Button className="w-[100px] bg-[#EB5C55] font-bold text-white " onClick={() => handleOpenEditDocument(record)}>Edit</Button>
          <Button className="w-[100px] bg-[#EB5C55] font-bold text-white " onClick={() => handleDeleteDocument(record.id)}>Delete</Button>
          </div>
        },
      ];
      
    
    const handleAddDocument = (document) => {
    dispatch(addDocumentAction(document));
    setIsAddDocumentOpen(false);
    };
    
    
    const handleDeleteDocument = (id) => {
        setTimeout(
            () => {
                if (window.confirm('Are you sure you want to delete this document?')){dispatch(deleteDocumentAction(id));}
                return (console.log('Delete'))},
            5000
          ); 
    };
    
    const handleOpenEditDocument = (document) => {
        setTimeout(
            () => {
                navigate(`/documents/${document.id}/edit`,{
                    state: {
                      document: document,
                    }
                  })
                return (console.log('Edit'))},
            5000
          ); 
    };
     
    const handleOpenAddDocument = () => {
        setLoading(true);
        setTimeout(
            () => {
                setLoading(false)
                setIsAddDocumentOpen(true); 
                return (console.log('addingDocument'))},
            5000
          ); 
    };
    
    const handleCloseAddDocument = () => {
    setIsAddDocumentOpen(false);
    };
    
    return (
    <div className="ml-[20px] mt-[30px]">
    <Button onClick={handleOpenAddDocument} loading={loading} className=" w-[200px] bg-[#EB5C55] font-bold text-white h-10 m-[20px]">
        <span className="tracking-[2px]"> Add Document</span>
    </Button>
    {isAddDocumentOpen && (
    <AddEditDocument onSave={handleAddDocument} onClose={handleCloseAddDocument} />
    )}
    {isLoading && <p>Loading...</p>}
    {!isLoading && documents.length === 0 && <p className="text-[55px] text-center mt-[200px] font-bold text-[#EB5C55]">No documents found.</p>}
    {!isLoading && documents.length > 0 && (
    <Table columns={columns} dataSource={documents} />
    )}
    </div>
    );
    };
export default Documents;