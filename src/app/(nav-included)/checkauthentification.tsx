"use client";
import React, { useEffect, useState } from 'react';

const Checkauthentification = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/Login";
      return;
    }

    fetch("http://localhost:3000/users/infos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          setIsAuthenticated(true);
        } else {
          window.location.href = "/Login";
        }
      })
      .catch((error) => {
        console.error(error);
        window.location.href = "/Login";
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Authentication state changed:", isAuthenticated);
  }, [isAuthenticated]);

  if (loading) {
    return <></>
  }
  if (!isAuthenticated) {
    window.location.href="/Login"
  }

  return <>{children}</>;
};

export default Checkauthentification;
