"use client";

import mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { CornerUpRight, Loader } from "lucide-react";

const NeshanMap = () => {
  const t = useTranslations("ContactPage");

  const [apiKeyLoaded, setApiKeyLoaded] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state
  const apiKeyRef = useRef<string | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Fetch API Key
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch("/api/map");
        const data = await response.json();
        if (data.apiKey) {
          apiKeyRef.current = data.apiKey;
          setApiKeyLoaded(true);
        } else {
          console.error("Failed to fetch API key");
        }
      } catch (error) {
        console.error("Error fetching API key:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApiKey();
  }, []);

  // Initialize Map after API key is loaded
  useEffect(() => {
    if (apiKeyLoaded && mapContainerRef.current) {
      setLoading(true);
      mapRef.current = new mapboxgl.Map({
        mapType: mapboxgl.Map.mapTypes.neshanVector,
        container: mapContainerRef.current,
        zoom: 13,
        pitch: 0,
        center: [46.3224, 38.0573],
        minZoom: 2,
        maxZoom: 21,
        trackResize: true,
        mapKey: apiKeyRef.current!,
        poi: false,
        traffic: false,
      }) as unknown as mapboxgl.Map;

      mapRef.current.on("load", () => {
        drawMarkerOnMap();
        setLoading(false);
      });
    }
  }, [apiKeyLoaded]);

  // Function to draw marker on map
  function drawMarkerOnMap() {
    const map = mapRef.current;

    if (map) {
      new mapboxgl.Marker({ color: "purple" })
        .setLngLat([46.3224, 38.0573])
        .addTo(map);
    }
  }

  // Handle directions button click
  const getDirections = () => {
    const url =
      "https://neshan.org/maps/@38.057314,46.322567,19.6z,0p/places/_bA9EB2C48y-";
    window.open(url, "_blank");
  };

  return (
    <div className="relative h-[40dvh] w-full rounded-md lg:h-[50dvh]">
      {loading && (
        <Loader className="h-11 w-11 absolute m-auto top-0 bottom-0 right-0 left-0 animate-spin text-[#2f7df4] z-50"/>
      )}
      <div ref={mapContainerRef} className="h-full w-full rounded-md">
        <Button
          onClick={getDirections}
          variant="custom"
          className="absolute right-2 top-3 z-50 gap-2"
        >
          <CornerUpRight size={20} />
          {t("getDir")}
        </Button>
      </div>
    </div>
  );
};

export default NeshanMap;
