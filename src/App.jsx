import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {t("headerTitle")}
      </h1>
    </>
  );
}

export default App;
