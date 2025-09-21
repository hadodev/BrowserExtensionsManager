import styles from "@containers/Extensions/Extensions.module.css";
import ExtensionFilter from "@components/ExtensionFilter/ExtensionFilter";
import ExtensionList from "@components/ExtensionList/ExtensionList";
import { useExtensions } from "@hooks/useExtensions";

const Extensions = () => {
  const {
    filteredData,
    currentFilter,
    handleToggleActive,
    handleRemove,
    handleFilterChange
  } = useExtensions();

  return (
    <section className={styles.extensions}>
      <header className={styles.header}>
        <h1>Extensions List</h1>
        <ExtensionFilter
          currentFilter={currentFilter}
          onFilterChange={handleFilterChange}
        />
      </header>
      <ExtensionList
        extensions={filteredData}
        onToggleActive={handleToggleActive}
        onRemove={handleRemove}
      />
    </section>
  );
}

export default Extensions;
