import Card from "./card";
import styles from "@/app/ui/dashboard/dashboard.module.css";
export default function GifWrapper(props) {
  const items = props?.items?.data || [];
  console.log(items);
  return (
    <div id={styles.gifWrapper}>
      {items.map((item) => {
        const { id, images, title } = item;
        return <Card key={item.id} title={title} url={images} />;
      })}
    </div>
  );
}
