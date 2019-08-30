import React, { useState } from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;
  letter-spacing: -1px;
`;
const Input = styled.input`
  color: ${(props) => props.theme.colors.prussianBlue};
  font-size: 1em;
  float: left;
  width: 100%;
  height: 60px;
  border: ${(props) => `1px ${props.theme.border.iron}`};
  border-radius: 8px;
  padding: 0 110px 0 20px;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0);
  transition: all .25s ease-out;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -30px;
  right: 0;
  width: 150px;
  height: 60px;
  font-size: 1em;
  color: ${(props) => props.theme.colors.white};
  text-transform: lowercase;
  cursor: pointer;
  box-shadow: none;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 20px;
  background: ${(props) => (props.isCopy
    ? props.theme.colors.shamrock : props.theme.colors.azureRadiance)};
  outline: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.shamrock};
  }
`;
const Disclaimer = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  margin: 8px 0 0 0;
  text-align: center;
`;

const API = process.env.GATSBY_SHORTEN_ENDPOINT;

const getShortUrl = async (longUrl, setCallback) => {
  const payload = {
    method: 'POST',
    body: JSON.stringify({ url: longUrl }),
  };

  try {
    const result = await fetch(API, payload);
    const { shortUrl } = await result.json();
    if (shortUrl) {
      setCallback({
        url: shortUrl,
        success: true,
        error: false,
      });
    }
  } catch (error) {
    setCallback({
      success: false,
      error: true,
    });
  }
};

const Shorter = () => {
  const [longUrl, setLongUrl] = useState('');
  const [callback, setCallback] = useState({ url: '', success: false, error: false });

  const submit = (evt) => {
    evt.preventDefault();
    getShortUrl(longUrl, setCallback);
  };

  return (
    <>
      <Form onSubmit={submit}>
        {
          !callback.success
            ? (
              <>
                <Input
                  id="link"
                  type="url"
                  placeholder="Paste long url and shorten it"
                  name="url"
                  onChange={({ target }) => { setLongUrl(target.value); }}
                  initialValue={longUrl}
                  required
                />
                <Button type="submit">Shorten</Button>
              </>
            )
            : (
              <>
                <Input
                  id="link"
                  type="text"
                  name="shortUrl"
                  value={callback.url}
                  initialValue={callback.url}
                  disabled
                />
                <Button
                  type="button"
                  onClick={() => {
                    setCallback({ url: '', success: false, error: false });
                  }}
                  isCopy
                >
                  Copy
                </Button>
              </>
            )
        }
      </Form>
      <Disclaimer>This is a service developed academically.</Disclaimer>
    </>
  );
};

export default Shorter;
