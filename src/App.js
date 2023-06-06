import { lazy, Suspense } from "react";
const Product = lazy(() => import("./pages/Product"));
function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Product />
    </Suspense>
  );
}

export default App;
