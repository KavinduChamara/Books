#!/bin/bash

user=root
pwrod=root

[ ! -d migrated ] && mkdir migrated

readarray -d '' entries < <(printf '%s\0' *.sql | sort -zV)
for entry in "${entries[@]}"; do
    [ ! -f migrated/$entry ] &&
        mysql -u $user -p$pwrod <$entry &&
        cp $entry migrated/$entry
done
