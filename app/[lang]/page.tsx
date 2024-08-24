import { Box } from '@mui/material';

import { Locale } from '@/i18n-config';
import { getDictionary } from '@/src/utils/getDictionary';
import MainContent from '@src/components/Main/Main';

async function MainPage({ params: { lang } }: { params: { lang: Locale } }) {
  const t = await getDictionary(lang);

  return (
    <Box sx={{ position: 'relative' }}>
      <MainContent t={t.basic} />
    </Box>
  );
}

export default MainPage;
