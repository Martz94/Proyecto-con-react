import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

const PatientList = () => {
  const patients = usePatientStore(state => state.patients)
  console.log(patients)
  return (
    <div className=" md:W-1/2 lg:5/5 md:h-screen overflow-y-scroll pr-3">
      {patients.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">Lista de pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className=" text-indigo-600 font-blod">Pacientes</span>
          </p>
          {patients.map( patient => (
            <PatientDetails
            key={patient.id}
            patient={patient}
            />
          ))}
        </>
      ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className=" text-indigo-600 font-blod">apareceran aqui</span>
            </p>
          </>
      )}
    </div>
  )
}

export default PatientList
