import { styled } from "baseui";
import { Card, StyledBody } from "baseui/card";
import { Button } from "baseui/button";

import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";

import { useState } from "react";

import "./styles.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const End = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export default function Home() {
  const [message, setMessage] = useState<any>("");
  const [pattern, setPattern] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card-wrapper">
        <Card
          overrides={{
            Root: {
              style: {
                borderRadius: "8px",
                height: "100%",
                maxHeight: "100%",
                width: "100%",
                boxShadow: " 0px 1px 3px 2px #4a4b53",
                display: "flex",
                flexDirection: "column",
                padding: "0 1rem",
              },
            },
            Title: {
              style: {
                width: "100%",
                minHeight: "4rem",
                maxHeight: "4rem",
                zIndex: 2,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              },
            },

            Body: {
              style: {
                width: "100%",
                maxWidth: "100%",
              },
            },
          }}
          title="Rabin karp demo"
          action={
            <End>
              <Button
                disabled={message == "" || pattern == ""}
                isLoading={loading}
                onClick={async (_) => {
                  setLoading(true);
                  try {
                    const rawAns = await fetch("http://localhost:8000/find", {
                      method: "POST",
                      body: JSON.stringify({
                        message,
                        pattern,
                      }),
                    });
                    const resp = await rawAns.json();
                    setLoading(false);
                    console.log(resp);
                  } catch (e) {
                    setLoading(false);
                  }
                }}
                overrides={{
                  BaseButton: {
                    style: {
                      borderRadius: "4px",
                      borderWidth: "2rem",
                      borderStyle: "none",
                      boxSizing: "border-box",
                      padding: "0 1rem",
                      height: "2.5rem",
                      minWidth: "6rem",
                      outline: "none",
                      backgroundColor: "#197476",
                    },
                  },
                }}
              >
                Find
              </Button>
            </End>
          }
        >
          <StyledBody>
            <ReactQuill
              theme="snow"
              value={message}
              onChange={setMessage}
              style={{
                backgroundColor: "#e1e1e1",
              }}
            />
            <div
              className="textArea-wrapper"
              style={{
                marginTop: "1rem",
              }}
            >
              <ReactQuill
                theme="snow"
                value={pattern}
                onChange={setPattern}
                style={{
                  backgroundColor: "#e1e1e1",
                }}
              />
            </div>
          </StyledBody>
        </Card>
      </div>
    </div>
  );
}
