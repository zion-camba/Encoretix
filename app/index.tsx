import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import CONSTANTS from '~/constants';
import Header from '~/components/Header';
import SearchInput from '~/components/SearchInput';
import Attraction from '~/components/Attraction';
import EpmtyListBanner from '~/components/EpmtyListBanner';
import SelectBtn from '~/components/SelectBtn';
import { getSearchResults } from '~/services/api';

export default function Page() {
  const router = useRouter();
  const [searchString, setSearchString] = useState('phish');
  const [band, setband] = useState('phish');
  const [selectedAttraction, setSelectedAttraction] = useState({ id: '', name: '' });

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['band', band],
    queryFn: () => getSearchResults(band),
  });

  const handleSelect = () => {
    router.push({
      pathname: '/item/details',
      params: { id: selectedAttraction.id, name: selectedAttraction.name },
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchInput
        searchString={searchString}
        setSearchString={setSearchString}
        onSubmit={() => setband(searchString)}
      />

      {!searchResults?._embedded?.attractions && !isLoading && <EpmtyListBanner />}

      {searchResults?._embedded?.attractions && (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchResults?._embedded?.attractions}
            renderItem={({ item }) => (
              <Attraction
                item={item}
                selectedAttraction={selectedAttraction}
                setSelectedAttraction={setSelectedAttraction}
              />
            )}
          />
          <SelectBtn handleSelect={handleSelect} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: CONSTANTS.COLORS.white,
  },
});
