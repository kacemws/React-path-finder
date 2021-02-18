import { styled, useStyletron } from "baseui";
import { Card, StyledBody } from "baseui/card";
import { Button } from "baseui/button";

import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/input";

import { useState } from "react";
import { Select } from "baseui/select";

import "./styles.css";

const App = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#121212",
});
const Centered = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const End = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export default function Home() {
  const [value, setValue] = useState<any>([
    { label: "Encrypt", id: "encrypt" },
  ]);
  const [message, setMessage] = useState<number | undefined | string>("");
  return (
    <App>
      <Centered>
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
            title="RSA thingy"
            action={
              <End>
                <Button
                  disabled={message == ""}
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
                  {value[0].id == "encrypt"
                    ? "Start Encrypting"
                    : "Start Dycrepting"}
                </Button>
              </End>
            }
          >
            <StyledBody>
              <Select
                clearable={false}
                options={[
                  { label: "Encrypt", id: "encrypt" },
                  { label: "Decrypt", id: "decrypt" },
                ]}
                value={value}
                placeholder="Select operation"
                onChange={(params) => setValue(params.value)}
              />
              <div
                className="textArea-wrapper"
                style={{
                  marginTop: "1rem",
                }}
              >
                <Textarea
                  value={message}
                  onChange={(e) => {
                    setMessage((e.target as HTMLTextAreaElement).value);
                  }}
                  size={SIZE.large}
                  placeholder={
                    value[0].id == "encrypt"
                      ? "Message to encrypt"
                      : "Message to decrypt"
                  }
                  clearable
                  clearOnEscape
                />
              </div>
            </StyledBody>
          </Card>
        </div>
      </Centered>
    </App>
  );
}
