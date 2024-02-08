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
            setFieldValue("step", values.step - 1)
          };

          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1)
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
                  <Field name="name" className="input" placeholder="Name" />
                  <ErrorMessage name="name" component="small" className="block text-xs text-red-600 mt-1" />
                  </div>
                  <div>
                  <Field
                    name="surname"
                    className="input"
                    placeholder="Surname"
                  />
                  <ErrorMessage name="surname" component="small" className="block text-xs text-red-600 mt-1" />
                  </div>
                </div>
              )}

              {values.step == 2 && (
                <div className="grid  gap-2.5">
                  <div>
                  <Field name="age" className="input" placeholder="Age" />
                  <ErrorMessage name="age" component="small" className="block text-xs text-red-600 mt-1" />
                  </div>
                  <div>
                  <Field name="job" className="input" placeholder="Job" />
                  <ErrorMessage name="job" component="small" className="block text-xs text-red-600 mt-1" />
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
                  <ErrorMessage name="about" component="small" className="block text-xs text-red-600 mt-1" />
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
          )
        }}
      </Formik>
    </div>
  );
}
export default App;
