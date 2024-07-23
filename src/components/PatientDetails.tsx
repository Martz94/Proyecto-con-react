import { toast } from "react-toastify"
import { Patient } from "../types"
import PatientItem from "./PatientItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

const PatientDetails = ({patient}: PatientDetailsProps) => {

   const deletePatient = usePatientStore((state)=> state.deletePatient)
   const getPatientById = usePatientStore((state)=> state.getPatientById)

   const handleClick = () => {
     deletePatient(patient.id)
     toast.error('Paciente Eliminado')
   }

  return (
      <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        
          <PatientItem label="ID" data={patient.id}/>
          <PatientItem label="Nombre" data={patient.name}/>
          <PatientItem label="Propietario" data={patient.caretaker}/>
          <PatientItem label="Email" data={patient.email}/>
          <PatientItem label="Fecha" data={patient.date.toString()}/>
          <PatientItem label="Sintomas" data={patient.symptoms}/>  

          <div className=" flex flex-col md:flex-row justify-between mt-10">
            <button 
            type="button"
            className=" py-2 px-10 bg-indigo-600 mb-3 md:mb-0 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={()=> getPatientById(patient.id)}>
                Editar
            </button>

            <button 
            type="button"
            className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleClick}>
                Eliminar
            </button>
          </div>
      </div>
  )
}

export default PatientDetails
