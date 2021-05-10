import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const Packages = ({ packages }) => {
  const data = packages.map((p) => ({ ...p, key: p.id }));
  return (
    <Table
      dataSource={data}
      pagination={false}
      style={{ marginBottom: "20px" }}
    >
      <ColumnGroup title="Packages">
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Category" dataIndex="category" key="category" />
        <Column title="Save At" dataIndex="createdAt" key="createdAt" />
      </ColumnGroup>
    </Table>
  );
};

export default Packages;
