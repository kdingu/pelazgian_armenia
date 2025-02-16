import Title from "~/components/title";
import { useTranslation } from "react-i18next";
import Subtitle from "~/components/subtitle";

function Route() {
  const { t } = useTranslation();

  return (
    <div className="py-10">
      <Title className="text-pastel-blue">Berzh Vahram Piranjani</Title>
      <Subtitle>{t("author.subtitle")}</Subtitle>

      <hr className="my-6" />

      <div className="relative pb-4">
        <img
          src="/author_photo.jpg"
          alt="Author"
          width={200}
          className="sm:float-left sm:mb-6 sm:mr-6"
        />
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: t("author.body") }}
        ></div>
      </div>
    </div>
  );
}

export default Route;
