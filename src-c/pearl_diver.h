
#ifndef PEARLDIVER_H
#define PEARLDIVER_H

#include "curl.h"

#include <pthread.h>
#include "hash.h"
#include <stdbool.h>

#define HIGH_BITS 0xFFFFFFFFFFFFFFFF
#define LOW_BITS 0x0000000000000000
#define LOW_0 0xDB6DB6DB6DB6DB6D
#define HIGH_0 0xB6DB6DB6DB6DB6DB
#define LOW_1 0xF1F8FC7E3F1F8FC7
#define HIGH_1 0x8FC7E3F1F8FC7E3F
#define LOW_2 0x7FFFE00FFFFC01FF
#define HIGH_2 0xFFC01FFFF803FFFF
#define LOW_3 0xFFC0000007FFFFFF
#define HIGH_3 0x003FFFFFFFFFFFFF

typedef struct {
  bc_trit_t mid_low[STATE_LENGTH];
  bc_trit_t mid_high[STATE_LENGTH];
  bc_trit_t low[STATE_LENGTH];
  bc_trit_t high[STATE_LENGTH];
} States;

typedef enum {
  PD_FINISHED,
  PD_SEARCHING,
  PD_FAILED,
  PD_FOUND,
  PD_INTERRUPTED,
  PD_INVALID
} PDStatus;

typedef struct {
  PDStatus status;
  int hasThreadingSupport;
  pthread_mutex_t new_thread_search;
} PearlDiver;

void pd_search(PearlDiver* ctx, curl_t* const curl,
               const int min_weight_magnitude, int numberOfThreads);
void pd_transform(bc_trit_t* const stateLow, bc_trit_t* const stateHigh,
                  bc_trit_t* const scratchpadLow, bc_trit_t* const scratchpadHigh);
void pd_increment(bc_trit_t* const midStateCopyLow, bc_trit_t* const midStateCopyHigh,
                  const int fromIndex, const int toIndex);
void pd_search_init(States* states, curl_t *const curl, size_t offset);

#endif
