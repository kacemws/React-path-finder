import { styled, useStyletron } from "baseui";
import { Card, StyledBody } from "baseui/card";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

import { FormControl } from "baseui/form-control";

import { useEffect, useState } from "react";

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
                  padding: " 0 1rem",
                },
              },

              Body: {
                style: {
                  backgroundColor: "red",
                  width: "100%",
                  flex: 1,
                },
              },
            }}
            title="RSA thingy"
            action={
              <End>
                <Button
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
                  Generate
                </Button>
              </End>
            }
          >
            <StyledBody></StyledBody>
          </Card>
        </div>
      </Centered>
    </App>
  );
}
