import { useState } from "react";
import "./App.css";
import { Table } from "antd";
import "antd/dist/reset.css";
// import "../node_modules/antd/dist/antd.css";

function App() {
  const columns = [
    {
      key: 0,
      title: "ID",
      dataIndex: "id",
      shouldCellUpdate: ({ id: current }, { id: prev }) => prev !== current,
    },
  ];
  const dataSource = new Array(1000).fill(null).map((_, i) => ({
    key: i,
    id: i,
  }));
  return (
    <>
      <div className="container">
        <div className="header">Header</div>
        <div className="body">
          <Table
            dataSource={dataSource}
            columns={columns}
            rowSelection={{
              type: "checkbox",
            }}
            scroll={{ y: 'calc(100vh - 240px)' }}
            pagination={true}
          />
        </div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
}

export default App;
