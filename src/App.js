import styles from "./App.module.css";
import materialColors from "./data/materialColors";
import Palette from "./Palette";

export default function App() {
  const colors = materialColors.map((color) => {
    return { ...color, value: color.variants[5].value };
  });
  return (<main className={styles.root}>
    <Palette colors={colors} />
  </main>);
}
