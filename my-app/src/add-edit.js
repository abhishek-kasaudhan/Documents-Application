import { Button, Input } from "antd";
import { useState } from "react";

const AddEditDocument = ({ document, onSave, onClose }) => {
    const [title, setTitle] = useState(document ? document.title : '');
    const[loadingSave,setLoadingSave]=useState(false);
    const [loadingCancel,setLoadingCancel]= useState(false)
    const [description, setDescription] = useState(document ? document.description : '');
    const  handleSubmit = (e) => {
        e.preventDefault();
        setLoadingSave(true)
        setTimeout(
            () => {
                setLoadingSave(false) 
                onSave({ title, description ,id: title});
                return (console.log('saved'))},
            5000
          );
        };
        const  handleCancel = (e) => {
            e.preventDefault();
            setLoadingCancel(true)
            setTimeout(
                () => {
                    setLoadingCancel(false) 
                    onClose();
                    return (console.log('cancel'))},
                5000
              );
            };   
        
        return (
            <div className="flex flex-row  gap-[5px] justify-center m-[20px] ">
            <div className="text-[20px]  text-[#EB5C55] font-bold">Title : </div>
            <Input  className="w-[300px]  text-[16px] font-bold " value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter some title"  />
            <div className="text-[20px] text-[#EB5C55] font-bold" >Description : </div>
            <Input  className="w-[300px]  text-[16px] font-bold " value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter some description"  />
            <Button disabled={!(title && description)} loading={loadingSave} onClick={handleSubmit} className="w-[100px]  !bg-[#EB5C55] font-bold text-white ">
            <span className="tracking-[2px]">Save</span>
            </Button>
            <Button onClick={handleCancel}  loading={loadingCancel} className="w-[100px] !bg-[#EB5C55] font-bold text-white ">
            <span className="tracking-[2px]">Cancel</span>
            </Button>
        </div> 
        
        );
        };

export default AddEditDocument;