#include <stdio.h>

#include "ccurl.h"
#include "curl.h"
#include "pearl_diver.h"
#include "hash.h"
#include "util/converter.h"

void dumpArray2(char* name, char* arr, int len) {
  int i;
  printf("\n=%s==============================================================="
          "========\n",
          name);
  printf("len: %d\n\n", len);
  for (i = 0; i < len; i++) {
    printf("%d", arr[i]);
    if (i < len - 1) {
      printf(", ");
    }
  }
  printf("\n=========================================================="
                  "==============\n");
}

char *ccurl_pow(const char *trytes, int minWeightMagnitude) {
    init_converter();
    printf("trytes %s\n", trytes);
  char *buf = NULL;
  size_t len = strnlen(trytes, TRANSACTION_LENGTH / 3);
  char *trits = trits_from_trytes(trytes, len);

  dumpArray2("trits", trits, len);

  curl_t curl;
  init_curl(&curl);
  absorb(&curl, trits, TRANSACTION_LENGTH - HASH_LENGTH);
  memcpy(&curl.state, &trits[TRANSACTION_LENGTH - HASH_LENGTH],
         HASH_LENGTH * sizeof(char));

PearlDiver pd;
  pd_search(&pd, &curl, minWeightMagnitude);

  memcpy(&trits[TRANSACTION_LENGTH - HASH_LENGTH], &curl.state,
         HASH_LENGTH * sizeof(char));
  buf = trytes_from_trits(trits, 0, TRANSACTION_LENGTH);

  free(trits);
  return buf;
}
