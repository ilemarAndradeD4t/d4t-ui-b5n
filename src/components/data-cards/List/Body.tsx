import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Card,
  CardHeader,
  TableCell,
  TableRow,
} from "../..";
import { generateUUIDToList } from "./utils";
import { ListContext } from "./store";
import { IListColumn } from "./types";

interface TableBodyRowProps {
  data: Record<string, string>[];
  columns: IListColumn<any>[];
  setSelectItem: (item) => void;
  multiItemsSelected: any[];
  setMultiItemsSelected: Dispatch<SetStateAction<any[]>>;
  limitOfMultiSelect: number;
  setItemsSelectedCount: Dispatch<SetStateAction<number>>;
  itemsSelectedCount: number;
}

const ListBodyEmpty = ({ colSpan }: { colSpan: number }) => {
  return (
    <span className='mt-10 ml-5'>
      Sin Resultados
    </span>
  );
};

const ListBodyItems = ({
  data,
  columns,
}: TableBodyRowProps) => {
  const renderCell = (
    column: IListColumn<any>,
    item: Record<string, string>
  ) => {
    if (column?.render) {
      return <div>{column.render(item)}</div>;
    }

    return <>{item[column.id]}</>;
  };

  return (
    <>
      {data.map((item, idx) => (
        <Card key={generateUUIDToList()}>
          {
            columns.map((column) => (
              renderCell(column, item)
            ))
          }
        </Card>
      ))}
    </>
  );
};

export const ListBody = () => {
  const {
    data,
    columns,
    setSelectItem,
    setMultiItemsSelected,
    multiItemsSelected,
    limitOfMultiSelect,
  } = useContext(ListContext);
  const [itemsSelectedCount, setItemsSelectedCount] = useState<number>(
    multiItemsSelected ? multiItemsSelected.length : 0
  );

  return (
    <>
      {data.length ? (
        <ListBodyItems
          setMultiItemsSelected={setMultiItemsSelected}
          setSelectItem={setSelectItem}
          setItemsSelectedCount={setItemsSelectedCount}
          itemsSelectedCount={itemsSelectedCount}
          data={data}
          multiItemsSelected={multiItemsSelected}
          columns={columns}
          limitOfMultiSelect={limitOfMultiSelect}
        />
      ) : (
        <ListBodyEmpty colSpan={columns.length} />
      )}
    </>
  );
};
