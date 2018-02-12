/*
    Adapted from here
    https://github.com/iotaledger/ccurl/blob/master/src/lib/hash.h
*/
#ifndef HASH_H
#define HASH_H

#include <unistd.h>
#include <stdint.h>

#define HASH_LENGTH 243
#define STATE_LENGTH 3 * HASH_LENGTH
#define TRYTE_LENGTH 2673
#define TRANSACTION_LENGTH TRYTE_LENGTH * 3
typedef int64_t bc_trit_t;
typedef char trit_t;

#endif
