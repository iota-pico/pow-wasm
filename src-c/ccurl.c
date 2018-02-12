/*
    Adapted from here
    https://github.com/iotaledger/ccurl/blob/master/src/lib/exports_cl.c
*/

#include <stdio.h>

#include "ccurl.h"
#include "curl.h"
#include "hash.h"
#include "pearl_diver.h"
#include "util/converter.h"

char *ccurl_pow(const char *trytes, int minWeightMagnitude) {
  init_converter();

  char *buf = NULL;
  size_t len = strnlen(trytes, TRANSACTION_LENGTH / 3);
  char *trits = trits_from_trytes(trytes, len);

  curl_t curl;
  init_curl(&curl);
  absorb(&curl, trits, TRANSACTION_LENGTH - HASH_LENGTH);
  memcpy(&curl.state, &trits[TRANSACTION_LENGTH - HASH_LENGTH],
         HASH_LENGTH * sizeof(char));

  PearlDiver pd;
  pd_search(&pd, &curl, minWeightMagnitude, -1);

  memcpy(&trits[TRANSACTION_LENGTH - HASH_LENGTH], &curl.state,
         HASH_LENGTH * sizeof(char));
  buf = trytes_from_trits(trits, 0, TRANSACTION_LENGTH);

  free(trits);
  return buf;
}
