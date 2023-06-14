'use client';

import axiosInstance from '@/utils/axios';

import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/GlobalRedux/hooks';
import {
  setCountryCategory,
  setCountryData,
} from '@/GlobalRedux/store/reducers/country';
import { setLoading } from '@/GlobalRedux/store/reducers/home';

import FullPageLoader from '@/components/Loader';
import Alert from '@/components/Alert';
import RestCountriesInfos from '@/components/RestCountriesInfos';
import GraphCountry from '@/components/Country/GraphCountry';

//TODO Typer les interface dans le dossier types
interface CountryProps {
  params: {
    id: string;
  };
}

function Country({ params }: CountryProps) {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.country.category);
  const data = useAppSelector((state) => state.country.data);
  const loading = useAppSelector((state) => state.home.spinner);
  const alert = useAppSelector((state) => state.user.alert);
  const isSideBarOpen = useAppSelector((state) => state.home.sideBar);
  const prkWidth = useAppSelector((state) => state.home.currentWidth);
  const countryId = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryUrl = `/oworld/${params.id}/category`;
        const dataUrl = `/oworld/${params.id}`;
        const categoryResponse = await axiosInstance.get(categoryUrl);
        const dataResponse = await axiosInstance.get(dataUrl);
        const categoryData = categoryResponse.data;
        const countryData = dataResponse.data;
        dispatch(setCountryCategory(categoryData));
        dispatch(setCountryData(countryData));
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [axiosInstance, dispatch, params.id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000); // 3 secondes de délai

    return () => clearTimeout(timer); // Efface le timer si le composant est démonté
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <>
          {countryId === 'PRK' ? (
            <>
              <div
                className={`p-8 flex flex-col items-center justify-center w-full gap-5`}
                style={isSideBarOpen ? { width: prkWidth } : {}}
              >
                <img
                  src="https://media2.giphy.com/media/xT9IgmYU3ZVaCjGafm/giphy.gif?cid=ecf05e47sk0rk5clzyz4rveyndjqflz9i3xl8ef25nwna67g&ep=v1_gifs_search&rid=giphy.gif"
                  alt="kim jung un"
                />
              </div>
            </>
          ) : (
            <>
              <RestCountriesInfos countryData={data} />
              <GraphCountry category={category} data={data} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Country;
