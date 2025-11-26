#!/usr/bin/env python3
"""
Basic async syntax
"""
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait for a random delay
    """
    return random.uniform(0, max_delay)
