import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./context/EmployeesContext";

function App() {
  return (
    <EmployeeContextProvider>
      <div className="App">
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Employees</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal">
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Employee</span>
                    </a>
                  </div>
                </div>
              </div>

              <EmployeeList />
            </div>
          </div>
        </div>
      </div>
    </EmployeeContextProvider>
  );
}

export default App;
