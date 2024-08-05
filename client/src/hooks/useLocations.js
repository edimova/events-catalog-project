import { useEffect, useState } from "react";
import locationsAPI from "../api/locations-api"

export function useGetAllLocations() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await locationsAPI.getAll();
            setLocations(result);
        })();

    }, []);
    return [locations, setLocations]
}

export function useLocationNames() {
    const [locNames, setLocNames] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await locationsAPI.getNames();

            setLocNames(result);
        })();

    }, []);
    return [locNames, setLocNames]
}