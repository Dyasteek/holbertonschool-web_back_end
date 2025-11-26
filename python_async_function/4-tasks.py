#!/usr/bin/env python3
"""
Tasks
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create a task for wait_random
    """
    return asyncio.create_task(wait_random(max_delay))


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with the specified max_delay
    Return the list of all delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for coro in asyncio.as_completed(tasks):
        delay = await coro
        i = 0
        while i < len(delays) and delay > delays[i]:
            i += 1
        delays.insert(i, delay)

    return delays