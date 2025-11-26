#!/usr/bin/env python3
"""
Concurrent coroutines
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Concurrent coroutines
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    
    for coro in asyncio.as_completed(tasks):
        delay = await coro
        i = 0
        while i < len(delays) and delay > delays[i]:
            i += 1
        delays.insert(i, delay)
    
    return delays
