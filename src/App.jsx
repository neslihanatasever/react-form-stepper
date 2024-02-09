import { Formik, Form, Field, ErrorMessage } from "formik";
import { stepperValidation } from "./validations/stepper-validation";

function App() {
  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          lastStep: 3,
          name: "",
          surname: "",
          search: "",
          age: "",
          job: "",
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };

          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };

          return (
            <Form className="w-[500px] py-5 mx-auto">
              <header className="mb-4">
                <h3 className="text-lg font-medium text-zinc-700">
                  Adım {values.step}{" "}
                </h3>
              </header>

              {values.step == 1 && (
                <div className="grid  gap-2.5">
                  <div>
                    <ErrorMessage
                      name="name"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="w-4/5 h-52 flex flex-col ml-40 border-solid border-2 rounded-3xl mt-24">
                    <div className="m-5 flex flex-col">
                      <label className="font">Parçanı Seç</label>
                      <label className="text-lightgray">
                        Kampanyayı oluşturmak istediğin parçayı seç
                      </label>
                    </div>

                    <div className="ml-4">
                      <Field
                        name="search"
                        type="text"
                        className="input w-[90%] h-10 border-solid border-2 rounded-xl pl-3"
                        placeholder="Spotify'da Ara..."
                      />
                    </div>

                    <div className="flex items-center mt-4 ml-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      />
                      <label className="ml-2 mb-1">Parçam Yayında Değil</label>
                    </div>
                  </div>


                  
                  <div>
                    <Field
                      name="surname"
                      className="input"
                      placeholder="Surname"
                    />
                    <ErrorMessage
                      name="surname"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step == 2 && (
                <div className="grid  gap-2.5">
                  <div>
                    <Field name="age" className="input" placeholder="Age" />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Field name="job" className="input" placeholder="Job" />
                    <ErrorMessage
                      name="job"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              {values.step == 3 && (
                <div className="grid  gap-2.5">
                  <div>
                    <Field
                      name="about"
                      component="textarea"
                      className="textarea"
                      placeholder="About"
                    />
                    <ErrorMessage
                      name="about"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {(values.step > 1 && (
                  <button onClick={prevHandle} type="button" className="button">
                    Prev
                  </button>
                )) || <div />}
                {(values.step == values.lastStep && (
                  <button className="button" type="submit">
                    Submit
                  </button>
                )) || [
                  <button onClick={nextHandle} type="button" className="button">
                    Next
                  </button>,
                ]}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default App;
