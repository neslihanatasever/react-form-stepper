import { Formik, Form, Field } from "formik";

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          step: 1,
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
        {({values}) => (
          <Form className="w-[500px] py-5 mx-auto">

            <header className="mb-4">
              <h3 className="text-lg font-medium text-zinc-700">Adım {values.step} </h3>
            </header>

            {values.step === 1 && (
              <div className="grid  gap-2.5">
                <Field name="name" className="input" placeholder="Name"/>
                <Field name="surname" className="input" placeholder="Surname"/>
              </div>
            )}

          </Form>
        )}
      </Formik>
    </div>
  );
}
export default App;
