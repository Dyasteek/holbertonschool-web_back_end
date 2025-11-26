#!/usr/bin/env python3
"""
Make a multiplier function
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Make a multiplier function
    """
    return lambda x: x * multiplier
