import { styled, useStyletron } from "baseui";
import { Card, StyledBody } from "baseui/card";
import { Button } from "baseui/button";

import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";

import { useState } from "react";
import { Select } from "baseui/select";

import "./styles.css";

const End = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export default function Home() {
  const [message, setMessage] = useState<number | undefined | string>("");
  const [pattern, setPattern] = useState<number | undefined | string>("");
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
            <Textarea
              value={message}
              onChange={(e) => {
                setMessage((e.target as HTMLTextAreaElement).value);
              }}
              size={SIZE.compact}
              placeholder={"Message"}
              clearable
              clearOnEscape
            />
            <div
              className="textArea-wrapper"
              style={{
                marginTop: "1rem",
              }}
            >
              <Textarea
                value={pattern}
                onChange={(e) => {
                  setPattern((e.target as HTMLTextAreaElement).value);
                }}
                size={SIZE.compact}
                placeholder={"Pattern"}
                clearable
                clearOnEscape
              />
            </div>
          </StyledBody>
        </Card>
      </div>
    </div>
  );
}
