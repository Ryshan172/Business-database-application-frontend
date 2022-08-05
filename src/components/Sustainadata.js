import React, { useState, useEffect } from "react";

import TextField from "./ui/text-field";
import DataTable from "./ui/data-table";
import Tr from "./app/tr";
import json from "./data/people.json";

import "./styles.css";

function pageData({ data, per = 50, page = 1 }) {
  return data.slice(per * (page - 1), per * page);
}

const searchableColumns = ["name", "value_prop", "category"];

export default function App({}) {
  const [state, setState] = useState({
    data: pageData({ data: json }),
    loading: false,
    page: 1,
    sortedBy: { first_name: "ascending" },
  });
  const [query, setQuery] = useState("");
  const [additionalData, setAdditionalData] = useState([]);

  useEffect(() => {
    if (!state.sortedBy) return;
    const sortKey = Object.keys(state.sortedBy)[0];
    const direction = state.sortedBy[sortKey];

    setState((prev) => ({
      ...prev,
      data: prev.data.sort((a, b) => {
        return direction === "ascending"
          ? a[sortKey] > b[sortKey]
          : a[sortKey] < b[sortKey];
      }),
    }));
  }, [state.sortedBy]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: search(json),
    }));
  }, [query]);

  function search(data) {
    return data.filter((row) =>
      searchableColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  function loadMore() {
    if (state.loading) return;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    setState((prev) => ({
      data: [...prev.data, ...pageData({ data: json, page: prev.page + 1 })],
      loading: false,
      page: prev.page + 1,
    }));
  }

  function toggleAdditionalData(row) {
    setAdditionalData((prev) =>
      additionalData.includes(row.id)
        ? prev.filter((id) => row.id !== id)
        : [...prev, row.id]
    );
  }

  function openWindow(row) {}

  return (
    <>
      <TextField
        placeholder="Type here to filter results"
        value={query}
        onChange={(val) => setQuery(val)}
      />
      <DataTable
        loadMore={loadMore}
        items={state.data}
        renderHead={() => (
          <>
            <Tr label="ID" />
            <Tr
              label="Name"
              sortedBy={state.sortedBy}
              sort={{ key: "name", changer: setState }}
            />
            <Tr
              label="Value Proposition"
              sortedBy={state.sortedBy}
              sort={{ key: "value_prop", changer: setState }}
            />
            <Tr
              label="Category"
              sortedBy={state.sortedBy}
              sort={{ key: "category", changer: setState }}
            />
            <Tr label="Sub_category" />
            <Tr
              label="Entity Type"
              sortedBy={state.sortedBy}
              sort={{ key: "entity_type", changer: setState }}
            />
            <Tr
              label="Country"
              sortedBy={state.sortedBy}
              sort={{ key: "country", changer: setState }}
            />
          </>
        )}
        renderRow={(row) => (
          <>
            <tr>
              <td onClick={() => toggleAdditionalData(row)}>{row.id}</td>
              <td onClick={() => toggleAdditionalData(row)}>{row.name}</td>
              <td onClick={() => toggleAdditionalData(row)}>
                {row.value_prop}
              </td>
              <td onClick={() => toggleAdditionalData(row)}>{row.category}</td>
              <td onClick={() => toggleAdditionalData(row)}>
                {row.sub_category}
              </td>
              <td onClick={() => toggleAdditionalData(row)}>
                {row.entity_type}
              </td>
              <td onClick={() => toggleAdditionalData(row)}>{row.country}</td>
            </tr>
          </>
        )}
      />
    </>
  );
}
